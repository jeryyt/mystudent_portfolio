import cv2 as cv
import numpy as np

# Load YOLOv3 model and configuration
modelConfiguration = "yolov3.cfg"
modelWeights = "yolov3.weights"

net = cv.dnn.readNetFromDarknet(modelConfiguration, modelWeights)
net.setPreferableBackend(cv.dnn.DNN_BACKEND_OPENCV)
net.setPreferableTarget(cv.dnn.DNN_TARGET_CPU)

# Load class names
classesFile = "coco.names"
with open(classesFile, 'rt') as f:
classes = f.read().rstrip('\n').split('\n')

# Read input image
image = cv.imread("input.jpg")
blob = cv.dnn.blobFromImage(image, 1/255.0, (416, 416), swapRB=True, crop=False)
net.setInput(blob)

# Get output layer names
layerNames = net.getLayerNames()
outputLayers = [layerNames[i[0] - 1] for i in net.getUnconnectedOutLayers()]

# Perform forward pass
outputs = net.forward(outputLayers)

# Process detections
for output in outputs:
for detection in output:
scores = detection[5:]
classID = np.argmax(scores)
confidence = scores[classID]
if confidence > 0.5:
box = detection[0:4] * np.array([image.shape[1], image.shape[0], image.shape[1], image.shape[0]])
(centerX, centerY, width, height) = box.astype("int")
x = int(centerX - (width / 2))
y = int(centerY - (height / 2))
cv.rectangle(image, (x, y), (x + width, y + height), (0, 255, 0), 2)
text = f"{classes[classID]}: {confidence:.2f}"
cv.putText(image, text, (x, y - 5), cv.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

cv.imshow("Image", image)
cv.waitKey(0)
cv.destroyAllWindows()