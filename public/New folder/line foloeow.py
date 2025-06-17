import cv2
import numpy as np

def pick_color(event, x, y, flags, param):
    """ Function to pick HSV values by clicking on the frame. """
    if event == cv2.EVENT_LBUTTONDOWN:
        hsv_color = hsv[y, x]
        print(f"HSV Value at ({x}, {y}): {hsv_color}")

# Open webcam
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
cap.set(3, 640)  # Width
cap.set(4, 480)  # Height

while True:
    ret, frame = cap.read()
    if not ret:
        print("Failed to grab frame")
        break

    # Convert to HSV color space
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # **Step 1: Run this script and click on the yellow line to get correct HSV values**
    cv2.imshow("Frame", frame)
    cv2.setMouseCallback("Frame", pick_color)

    # **Step 2: Once you get HSV values, replace these thresholds**
    lower_yellow = np.array([20, 100, 100])  # Update based on clicked HSV values
    upper_yellow = np.array([40, 255, 255])

    # Create a mask for yellow
    mask = cv2.inRange(hsv, lower_yellow, upper_yellow)

    # Morphological operations to remove noise
    kernel = np.ones((5, 5), np.uint8)
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)

    # Find contours
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    if contours:
        # Find largest contour (assumed to be the yellow line)
        c = max(contours, key=cv2.contourArea)
        M = cv2.moments(c)
        if M["m00"] != 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])

            # Draw tracking indicators
            cv2.circle(frame, (cx, cy), 5, (0, 255, 0), -1)
            cv2.drawContours(frame, [c], -1, (0, 255, 0), 2)

            # Decision making for movement
            if cx < 200:
                print("Turn Left")
            elif cx > 440:
                print("Turn Right")
            else:
                print("On Track")

    # Show frames
    cv2.imshow("Mask", mask)
    cv2.imshow("Frame", frame)

    # Exit on 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
