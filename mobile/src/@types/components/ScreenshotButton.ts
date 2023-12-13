export interface ScreenshotButtonProps {
  screenshot: string;
  onTakeShot?(): Promise<void>;
  onRemoveShot?(): Promise<void>;
}
