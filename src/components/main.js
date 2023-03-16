import CurrentApy from "./CurrentApy";
import FormWithdraw from "./form-withdraw";
import Notification from "./NotificationBanner";
export default function Main() {
  return (
    <div className="flex top-0 flex-col">
      <CurrentApy />
      <FormWithdraw />
      <Notification />
    </div>
  );
}
