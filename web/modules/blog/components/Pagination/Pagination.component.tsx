import { memo } from "react";
import styles from "./Pagination.module.css";

export interface PaginationProps {
  nextPageHref: string;
  nextPageAvailable: boolean;
  previousPageHref: string;
  previousPageAvailable: boolean;
}

const Pagination = ({
  nextPageHref,
  previousPageHref,
  nextPageAvailable,
  previousPageAvailable,
}: PaginationProps) => {
  return (
    <div className="flex items-center w-full justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 w-full justify-between sm:hidden">
        <div>
          {previousPageAvailable && (
            <a href={previousPageHref} className={styles["change-button"]}>
              Previous
            </a>
          )}
        </div>
        <div>
          {nextPageAvailable && (
            <a href={nextPageHref} className={styles["change-button"]}>
              Next
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Pagination);
