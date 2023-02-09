export function PoolsHeader({ isWarningVisible }) {
  //
  return (
    <div style={isWarningVisible ? {marginTop: '130px'} : {marginTop: '55px'}} className="ibrahim-pool-head debug">
      <div className="ibrahim-pool-head-text1">Syrup Pools</div>
      <div className="ibrahim-pool-head-text2">
        Just stake some tokens to earn.
      </div>
      <div className="ibrahim-pool-head-text3">High APR, low risk.</div>
    </div>
  );
}
