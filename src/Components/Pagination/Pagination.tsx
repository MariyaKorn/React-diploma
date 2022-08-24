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
    onPageClick: () => void;
};

const Pagination: FC<PaginationProps> = ({
    pageNum,
    pagesCount,
    onPrevClick,
    onNextClick,
    onPageClick,
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
                <button className="paginationPageNum" onClick={onPageClick}>{pageNum}</button>
                <button className="paginationPageNum" onClick={onPageClick}>{`${pageNum+1}`}</button>
                <button className="paginationPageNum three" onClick={onPageClick}>{`${pageNum+2}`}</button>
                <button className="paginationPageNum four" onClick={onPageClick}>{`${pageNum+3}`}</button>
                <button className="paginationPageNum">...</button>
                <button className="paginationPageNum" onClick={onPageClick}>{pagesCount}</button>
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