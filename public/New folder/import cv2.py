import cv2
import mediapipe as mp
import numpy as np
from ultralytics import YOLO

# Initialize MediaPipe Hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    max_num_hands=2,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.5
)
mp_draw = mp.solutions.drawing_utils

# Initialize YOLO model
model = YOLO('yolov8n.pt')  # using the smallest YOLOv8 model

# Start video capture
cap = cv2.VideoCapture(0)

while True:
    success, frame = cap.read()
    if not success:
        break
        
    # Convert BGR to RGB
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    
    # Hand detection
    hand_results = hands.process(rgb_frame)
    if hand_results.multi_hand_landmarks:
        for hand_landmarks in hand_results.multi_hand_landmarks:
            # Draw hand landmarks
            mp_draw.draw_landmarks(
                frame, 
                hand_landmarks, 
                mp_hands.HAND_CONNECTIONS
            )
    
    # Object detection
    results = model(frame)
    
    # Draw object detection results
    for r in results:
        boxes = r.boxes
        for box in boxes:
            # Get box coordinates
            x1, y1, x2, y2 = box.xyxy[0]
            x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2)
            
            # Draw rectangle
            cv2.rectangle(frame, (x1, y1), (x2, y2), (255, 0, 255), 3)
            
            # Add label
            conf = round(float(box.conf[0]), 2)
            cls = int(box.cls[0])
            label = f'{model.names[cls]} {conf}'
            
            # Put text
            cv2.putText(frame, label, (x1, y1 - 10), 
                       cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 0, 255), 2)
    
    # Show frame
    cv2.imshow('Hand Gesture and Object Detection', frame)
    
    # Break loop with 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()