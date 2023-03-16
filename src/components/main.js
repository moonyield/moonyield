import CurrentApy from "./CurrentApy";
import FormWithdraw from "./form-withdraw";
import Notification from "./NotificationBanner";
import UsdcBalance from "./axlusdcbalance";
export default function Main() {
  return (
    <div className="flex flex-col">
      {/* <UsdcBalance /> */}
      <CurrentApy />
      <FormWithdraw />
      <Notification />
    </div>
  );
}
