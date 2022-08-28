import React, { FC } from "react";
import "./Pagination.css";
import classNames from "classnames";
import prev from '../../Assets/Images/ArrowLeft.png';
import next from '../../Assets/Images/ArrowRight.png';
import { useThemeContext, Theme } from '../../Context/themeModeContext';

type PaginationProps = {
    pageNum: number;
    pagesCount: number;
    onPrevClick: () => void;
    onNextClick: () => void;
    onPageClick: (pageNum: number) => void;
    onLastClick: () => void;
};

const Pagination: FC<PaginationProps> = ({
    pageNum,
    pagesCount,
    onPrevClick,
    onNextClick,
    onPageClick,
    onLastClick,
}) => {

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;

    return (
    <div className="pagination">
        <div className={classNames({
            ['paginationButtonsLight']: isThemeLight,
            ['paginationButtonsDark']: !isThemeLight,})}>
            <div>
                <button className={classNames("paginationButton", { 
                    ["_inactive"]: pageNum === 1 })} 
                    onClick={onPrevClick}>
                    <div className={classNames({
                        ['paginationButtonInfoLight']: isThemeLight,
                        ['paginationButtonInfoDark']: !isThemeLight,})}>
                        <img src={prev} alt="prev-page" />
                        <div>Prev</div>
                    </div>
                </button>
            </div>

            <div className="paginationPageNums">
                <div className={classNames("paginationButton", { 
                    ["_lastPage"]: pageNum === pagesCount,
                    ["_active"]: pageNum === pageNum})}>{pageNum}</div>
                <div className={classNames("paginationButton", { 
                    ["_lastPage"]: pageNum === pagesCount,
                    ["_lastPageSoon-1"]: pageNum === pagesCount - 1})} onClick={() => onPageClick(pageNum+1)}>{`${pageNum+1}`}</div>
                <div className={classNames("paginationButton three", { 
                    ["_lastPage"]: pageNum === pagesCount,
                    ["_lastPageSoon"]: pageNum === pagesCount - 2,
                    ["_lastPageSoon-1"]: pageNum === pagesCount - 1})} onClick={() => onPageClick(pageNum+2)}>{`${pageNum+2}`}</div>
                <div className={classNames("paginationButton four", { 
                    ["_lastPage"]: pageNum === pagesCount,
                    ["_lastPageSoon"]: pageNum === pagesCount - 2,
                    ["_lastPageSoon-1"]: pageNum === pagesCount - 1,
                    ["_lastPageSoon-2"]: pageNum === pagesCount - 3})} onClick={() => onPageClick(pageNum+3)}>{`${pageNum+3}`}</div>
                <div className={classNames("paginationButton", { 
                    ["_lastPage"]: pageNum === pagesCount,
                    ["_lastPageSoon-1"]: pageNum === pagesCount - 1,
                    ["_lastPageSoon"]: pageNum === pagesCount - 2,
                    ["_lastPageSoon-2"]: pageNum === pagesCount - 3,
                    ["_lastPageSoon-3"]: pageNum === pagesCount - 4})}>...</div>
                <div className={classNames("paginationButton", { 
                    ["_active"]: pageNum === pagesCount})} onClick={onLastClick}>{pagesCount}</div>
            </div>
        
            <div>
                <button
                    className={classNames("paginationButton", {
                        ["_inactive"]: pageNum === pagesCount })}
                    onClick={onNextClick}>
                    <div className={classNames({
                        ['paginationButtonInfoLight']: isThemeLight,
                        ['paginationButtonInfoDark']: !isThemeLight,})}>
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