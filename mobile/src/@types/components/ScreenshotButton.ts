export interface ScreenshotButtonProps {
  screenshot: string;
  isLoading?: boolean;
  onTakeShot?(): Promise<void>;
  onRemoveShot?(): Promise<void>;
}
