import cv2
import numpy as np

# Open the webcam (Change index if needed)
cap = cv2.VideoCapture(0)

# Set camera properties (adjust if needed)
cap.set(cv2.CAP_PROP_BRIGHTNESS, 0.5)  
cap.set(cv2.CAP_PROP_SATURATION, 0.7)  

while True:
    ret, frame = cap.read()
    if not ret:
        print("Failed to grab frame")
        break
    
    # Convert frame to HSV
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # Define yellow color range in HSV
    lower_yellow = np.array([20, 100, 100])  
    upper_yellow = np.array([30, 255, 255])  

    # Create mask to filter only yellow
    mask = cv2.inRange(hsv, lower_yellow, upper_yellow)

    # Apply morphological operations to clean the mask
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))  # Remove small noise
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8)) # Fill gaps

    # Find contours in the mask
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    if contours:
        # Get the largest detected contour
        largest_contour = max(contours, key=cv2.contourArea)
        
        # Draw the largest contour
        cv2.drawContours(frame, [largest_contour], -1, (0, 255, 0), 2)

        # Find centroid of the detected yellow line
        M = cv2.moments(largest_contour)
        if M["m00"] != 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])

            # Print centroid position
            print(f"CX: {cx}, CY: {cy}")

            # Draw circle at the centroid
            cv2.circle(frame, (cx, cy), 5, (255, 0, 0), -1)

            # Determine direction based on centroid position
            if cx < 140:
                print("Turn Left")
            elif cx > 180:
                print("Turn Right")
            else:
                print("On Track!")

    # Show the mask and original frame
    cv2.imshow("Yellow Mask", mask)
    cv2.imshow("Frame", frame)

    # Press 'q' to exit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the camera and close windows
cap.release()
cv2.destroyAllWindows()
