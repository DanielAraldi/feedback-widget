export interface ScreenshotButtonProps {
  disabled?: boolean;
  screenshot: string;
  onScreenshotTook(screenshot: string): void;
}
