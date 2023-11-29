import { memo, ReactNode } from "react";
import "./FourBoxesGrid.styles.css";

interface IFourBoxesGridPropTypes {
  firstBox?: ReactNode;
  secondBox?: ReactNode;
  thirdBox?: ReactNode;
  fourthBox?: ReactNode;
}

const FourBoxesGrid = ({
  firstBox,
  secondBox,
  thirdBox,
  fourthBox,
}: IFourBoxesGridPropTypes) => {
  return (
    <div className="boxes-wrapper">
      <div className="col-50">
        <div className="col-content">
          <div className="box">
            <div className="box-content bg-black">{firstBox}</div>
          </div>
        </div>
      </div>
      <div className="col-50">
        <div className="col-content flex-column">
          <div className="row-100-50">
            <div className="box">
              <div className="box-content bg-slate-gray">{secondBox}</div>
            </div>
          </div>
          <div className="row-100-50 row-double-column">
            <div className="col-50">
              <div className="col-content">
                <div className="box">
                  <div className="box-content bg-red">{thirdBox}</div>
                </div>
              </div>
            </div>
            <div className="col-50">
              <div className="col-content">
                <div className="box">
                  <div className="box-content bg-gray">{fourthBox}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FourBoxesGrid);
