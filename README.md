# React_Timer
This is a practice timer project based on React and Typescript

React Timer Component Requirements
Create a React (TypeScript) Timer Component that includes the following features:

1. User Input & Start Button
An input box where users can enter the number of seconds to count down from.
A "Start" button that begins the countdown when clicked.
Once the timer starts, the input field and "Start" button should be disabled to prevent changes.
2. Countdown Display
The timer should display the remaining time in real-time in the format:
X.XXXs (e.g., "11.315s").
When the remaining time is 5 seconds or less, the text color should change to red. Otherwise, it should be black.
When the countdown reaches 0 (or below), it should stop and display:
"Time's up" instead of the numerical countdown.
3. Progress Bar
A progress bar should visually represent the countdown.
The bar starts at full width (100%) when the timer begins.
The bar should gradually decrease in width proportionally to the remaining time.
The bar's initial width should be 300px and shrink until the timer reaches 0.
4. Timer Stopping Conditions
The timer should automatically stop when reaching 0 or below.
At this point, the remaining time text should change to "Time’s up".
5. Styling
The component should be styled using CSS (external file Timer.css).
Use appropriate styling for:
The input field
The start button (including disabled state)
The countdown display (with red text for low time)
The progress bar (smooth transitions for width reduction)
