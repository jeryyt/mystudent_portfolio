import cv2
import numpy as np

# Find the correct camera index (Try changing this if it doesn't work)
cap = cv2.VideoCapture(1)  # Change index to 0, 1, or 2 based on your webcam

if not cap.isOpened():
    print("Error: Could not open webcam.")
    exit()

while True:
    # Read the frame from the webcam
    ret, frame = cap.read()
    if not ret:
        print("Error: Could not read frame.")
        break

    # Convert frame to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Apply Gaussian Blur to reduce noise
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # Adaptive threshold to detect black lines only
    _, thresh = cv2.threshold(blurred, 50, 255, cv2.THRESH_BINARY_INV)

    # Morphological operations to remove noise (close gaps in the line)
    kernel = np.ones((5, 5), np.uint8)
    thresh = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)

    # Detect contours (lines)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Filter out only the longest continuous black line
    longest_contour = None
    max_length = 0

    for contour in contours:
        length = cv2.arcLength(contour, closed=False)
        if length > max_length:
            max_length = length
            longest_contour = contour

    # Draw only the detected line
    if longest_contour is not None:
        cv2.drawContours(frame, [longest_contour], -1, (0, 255, 0), 3)

    # Display the output
    cv2.imshow("Frame", frame)
    cv2.imshow("Black Line Detection", thresh)

    # Press 'q' to exit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()
