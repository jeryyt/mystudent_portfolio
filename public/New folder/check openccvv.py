

import cv2

for i in range(10):  # Try checking up to 10 indexes
    cap = cv2.VideoCapture(i)
    if cap.isOpened():
        print(f"Camera found at index {0}")
        cap.release()
    else:
        print(f"No camera found at index {i}")
