import React, { FC } from "react";
import "./Pagination.css";
import classNames from "classnames";
import prev from '../../Assets/Images/ArrowLeft.png';
import next from '../../Assets/Images/ArrowRight.png'

type PaginationProps = {
    pageNum: number;
    pagesCount: number;
    onPrevClick: () => void;
    onNextClick: () => void;
};

const Pagination: FC<PaginationProps> = ({
    pageNum,
    pagesCount,
    onPrevClick,
    onNextClick,
}) => {

    return (
    <div className="pagination">
        <div className="paginationButtons">
            <div>
                <button className={classNames("paginationButton", { ["_inactive"]: pageNum === 1 })} 
                onClick={onPrevClick}>
                    <div className="paginationButtonInfo">
                        <img src={prev} alt="prev-page" />
                        <div>Prev</div>
                    </div>
                </button>
            </div>

            <div className="paginationPageNums">
                <div className="paginationPageNum">{pageNum}</div>
                <div className="paginationPageNum">{`${pageNum+1}`}</div>
                <div className="paginationPageNum">{`${pageNum+2}`}</div>
                <div className="paginationPageNum">{`${pageNum+3}`}</div>
                <div className="paginationPageNum">...</div>
                <div className="paginationPageNum">{`${pageNum+5}`}</div>
            </div>
        
            <div>
                <button
                    className={classNames("paginationButton", { ["_inactive"]: pageNum === pagesCount })}
                    onClick={onNextClick}>
                    <div className="paginationButtonInfo">
                        <div>Next</div>
                        <img src={next} alt="next-page" />
                    </div>
                </button>
            </div>
        </div>
    </div>
    );
};

export default Pagination;