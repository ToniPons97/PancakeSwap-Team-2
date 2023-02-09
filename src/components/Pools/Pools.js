import "./Pools.scss";
import { Helmet } from "react-helmet";
import { PoolsFooter } from "./PoolsFooter";
import { PoolsHeader } from "./PoolsHeader";
import { PoolsTable } from "./PoolsTable";

export function Pools() {
  //
  return (
    <div>
      <Helmet>
        <title>Pools | PancakeSwap</title>
      </Helmet>
      <PoolsHeader />
      <PoolsTable className="ibrahim-pool-middle" />
      <PoolsFooter />
    </div>
  );
}
