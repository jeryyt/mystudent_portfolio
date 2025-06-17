import cv2
import numpy as np

# Initialize webcam
cap = cv2.VideoCapture(1)
cap.set(3, 160)  # Set width
cap.set(4, 120)  # Set height

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Convert frame to HSV and create a mask for detecting the line
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    low_b = np.uint8([5, 5, 5])
    high_b = np.uint8([100, 100, 100])
    mask = cv2.inRange(hsv, low_b, high_b)

    # Find contours
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    if contours:
        c = max(contours, key=cv2.contourArea)  # Select the largest contour
        M = cv2.moments(c)
        if M["m00"] != 0:
            cx = int(M["m10"] / M["m00"])  # Find the centroid X coordinate
            cy = int(M["m01"] / M["m00"])  # Find the centroid Y coordinate

            # Display centroid coordinates
            print(f"CX: {cx} CY: {cy}")

            # Decision-making for movement simulation
            if cx < 60:
                print("Turn Left")
                direction = "Turning Left"
            elif cx > 100:
                print("Turn Right")
                direction = "Turning Right"
            else:
                print("On Track")
                direction = "On Track"

            # Draw marker and display movement on frame
            cv2.circle(frame, (cx, cy), 5, (255, 0, 255), -1)
            cv2.putText(frame, direction, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)

    # Show frames
    cv2.imshow("Frame", frame)
    cv2.imshow("Mask", mask)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
