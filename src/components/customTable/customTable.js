import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Divider } from '@mui/material';
import { Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import cssstyle from './customTable.module.css';
import style from './customTable.module.css';
import CustomTypo from '../common/CustomTypo/CustomTypo';
import CardWrap from '../common/CardWrap';
import SearchBar from '../common/searchBar';
import Shimmer from '../shimmer';

export default function CustomTable({
  title,
  rows,
  headData,
  gridWidth,
  searchBar,
  mainHeading,
  actionButtons = [],
  loading = false,
  pagination = null
}) {
  const styles = {
    row: {
      display: 'grid',
      minWidth: '900px',
      gridTemplateColumns: gridWidth,
      margin: '0px 15px'
      // gap: '4px'
    }
  };

  function Tablehead() {
    return (
      <TableHead>
        <TableRow style={styles.row}>
          {headData.map((headCell, index) => (
            <TableCell
              key={index}
              className={style.headCell}

            // align={headCell.align}
            // padding={headCell.disablePadding ? 'none' : 'normal'}
            // sortDirection={orderBy === headCell.id ? order : false}
            >
              <CustomTypo variant={"body2"} fontWeight={500} fontSize={"1.2rem"}>{headCell}</CustomTypo>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  return (
    <>
      <CardWrap>
        {/* <div className={style.searchBarContainer}>
          {searchBar ? (
            <AnimatedSearchbar value={searchBar.value} onChange={searchBar.onChange}>
              {actionButtons.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </AnimatedSearchbar>
          ) : (
            <div className={style.tableMainHeadingContainer}>
              <div className="app-page-title--heading ml-2">
                            <h1>{mainHeading}</h1>
                        </div>
              <CustomTypo variant="h3">{mainHeading}</CustomTypo>
              <div className={style.actionBtnContainer}>
                {actionButtons.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            </div>
          )}
        </div> */}

       <div className={`d-flex gap-3 mb-1 mt-1  ${style.table}`}>
       <div >
          {title &&
            <CustomTypo variant={"h3"} className={`pl-1 `} fontSize={"24px"} fontWeight={500}>{title}</CustomTypo>
          }
        </div>
        <div>
          {searchBar &&
            <SearchBar
              className={style.table}
              placeholder={searchBar.placeholder}
              onChange={searchBar.onChange}></SearchBar>
          }
        </div>
       </div>


        <Box className={style.tableBox}>
          <TableContainer
            sx={{
              // width: '100%',
              // overflowX: 'scroll',
              position: 'relative',
              display: 'block',

              '& td, & th': { whiteSpace: 'nowrap' }
            }}
          >
            <Table
              aria-labelledby="tableTitle"
              sx={{
                '& .MuiTableCell-root:first-of-type': {
                  pl: 2
                },
                '& .MuiTableCell-root:last-of-type': {
                  pr: 3
                }
              }}
            >
              <Tablehead />

              {loading ?
                <Shimmer instance={5} height="80px" />
                :
                <TableBody>
                  {rows.map((row, index1) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        // aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={index1}
                        // selected={isItemSelected}
                        style={styles.row}
                      >
                        {row.map((item, index) => {
                          return (
                            <div key={index} className={style.cellDiv}>
                              {typeof item === 'string' ? (
                                <>
                                  {/* <div style={{ width: '100%', paddingLeft: index === 0 ? 15 : 0 }}> */}
                                  <p className={style.cellText}>{item}</p>
                                  {/* </div> */}
                                  {/* </CustomTypo> */}
                                </>
                              ) : (
                                <>{item}</>
                              )}
                            </div>
                          );
                        })}


                      </TableRow>

                    );
                  })}

                </TableBody>
              }
            </Table>
          </TableContainer>

          {/* {pagination && rows?.length > 0 && (
            <div className={cssstyle.pagination}>
              <Pagination color={'secondary'} count={pagination.count} page={pagination.page} onChange={pagination.onChange} />
            </div>
          )} */}
        </Box>
      </CardWrap>
    </>
  );
}

CustomTable.propTypes = {
  rows: PropTypes.arrayOf(Object),
  headData: PropTypes.arrayOf(String),
  gridWidth: PropTypes.string,
  loading: PropTypes.bool,
  pagination: PropTypes.any
};
