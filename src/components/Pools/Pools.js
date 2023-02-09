import "./Pools.scss";
import { PoolsFooter } from "./PoolsFooter";
import { PoolsHeader } from "./PoolsHeader";
import { PoolsTable } from "./PoolsTable";

export function Pools() {
  //
  return (
    <div>
      <PoolsHeader />
      <PoolsTable className="ibrahim-pool-middle" />
      <PoolsFooter />
    </div>
  );
}
