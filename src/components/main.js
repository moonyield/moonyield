import CurrentApy from "./CurrentApy";
import FormWithdraw from "./form-withdraw";
export default function Main() {
  return (
    <div className="flex flex-col">
      <CurrentApy />
      <FormWithdraw />
    </div>
  );
}
