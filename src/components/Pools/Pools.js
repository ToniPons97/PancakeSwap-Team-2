import "./Pools.scss";
import { Helmet } from "react-helmet-async";
import { PoolsFooter } from "./PoolsFooter";
import { PoolsHeader } from "./PoolsHeader";
import { PoolsTable } from "./PoolsTable";

export function Pools({ isWarningVisible }) {
  //
  return (
    <div>
      <Helmet>
        <title>Pools | PancakeSwap</title>
      </Helmet>
      <PoolsHeader isWarningVisible={isWarningVisible}/>
      <PoolsTable className="ibrahim-pool-middle" />
      <PoolsFooter />
    </div>
  );
}
