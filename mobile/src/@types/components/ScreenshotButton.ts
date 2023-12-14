export interface ScreenshotButtonProps {
  screenshot: string;
  isLoading?: boolean;
  onRemoveShot?(): void;
  onTakeShot?(): Promise<void>;
}
