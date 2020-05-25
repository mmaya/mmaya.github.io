import React from 'react'
import { useTable, useExpanded, useFilters, usePagination, useSortBy } from 'react-table'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//@material-ui/core
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
 import InfoIcon from '@material-ui/icons/Info';
 import makeStyles from "@material-ui/core/styles/makeStyles";
//Biblioteca para pesquisas eficientes
import _ from "lodash";
// nodejs library to set properties for components
import PropTypes from "prop-types";

//Custom filters
import {  fuzzyTextFilterFn, 
          DefaultColumnFilter, 
          SliderColumnFilter, 
          NumberRangeColumnFilter,
          SelectColumnFilter,
          MultiSelectColumnFilter,
          filterGreaterThan
        } from "./Filters"

const useStyles = makeStyles(theme => ({
  paper: {
      width: '100%',
      overflowX: 'auto',
    },
  table: {
      minWidth: 650,
    }
  }
));

// Our table component
export  default function CustomReactTable({ ...props }) {
  const classes = useStyles();
  const {  
    colunas, 
    onClick, 
    linhasPorPagina, 
    filtroInicial,
    formatacaoCondicional,
    formatacaoCondicionalEstilo,
    subComponente } = props;
  const data = props.dados;


  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? _.toLower(rowValue).startsWith(_.toLower(filterValue))
            : true
        })
      },
      multiSelect: (rows, id, filterValue) => {
        if(filterValue.length===0){
          return rows
        }
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? filterValue.includes(rowValue)
            : true
        })
      }
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )


  //Aplica o campo de filtro customizado
  const  campoFiltro = (tipo) => {
    switch (tipo){
    case "select":
      return SelectColumnFilter;
    case "multiSelect":
      return MultiSelectColumnFilter;
    case "range":
      return NumberRangeColumnFilter;
    case "slider":
      return SliderColumnFilter;
    default: return undefined;
    }
  }



  
const geraTableRow = (row) => {
  if (onClick){
    return (
    <TableRow {...row.getRowProps()} onClick={() => onClick(row.cells[0].value)} hover style={{ cursor: 'pointer' }} key={row.index}>
      {row.cells.map((cell, key) => {
                      return (
                        <TableCell  {...cell.getCellProps()} key={key}>{cell.render('Cell')}</TableCell >
                      )
                    })}
    </TableRow>
  )
  }
  if(formatacaoCondicional && formatacaoCondicionalEstilo){
    return (
      <>
      <TableRow 
            {...row.getRowProps()} 
            style={formatacaoCondicional(row.original) ? {...formatacaoCondicionalEstilo} : {}} 
            key={row.index}>
              {row.cells.map((cell, key) => {
                              return (
                                <TableCell  {...cell.getCellProps()}  key={`${key}-cell`}>{cell.render('Cell')}</TableCell >
                              )
                            })}
      </TableRow>
      {row.isExpanded ? (
                    <TableRow>
                      <TableCell colSpan={flatColumns.length} >
                        {subComponente(row.original)}
                      </TableCell>
                    </TableRow>
                  ) : null}
      </>
      )
  }
  return (
    <TableRow {...row.getRowProps()}  key={row.index}>
      {row.cells.map((cell, key) => {
                      return (
                        <TableCell  {...cell.getCellProps()} key={`${key}-cell`}>{cell.render('Cell')}</TableCell >
                      )
                    })}
    </TableRow>
  )}


  const criaColunaDeAcoes = (acoes, props) =>{
    const expandedProps = props.row.getExpandedToggleProps()
    return(
      <div>
        {acoes.map((acao) => {
            return  <IconButton aria-label={acao.label} color="primary" size="medium" onClick={() => acao.onClick(props.row.original)} key={acao.label}>
                            {acao.icone}
                          </IconButton>
                        })
        }
        {subComponente &&
              <IconButton aria-label={expandedProps.title} color="primary" size="medium" onClick={(event) => {expandedProps.onClick(event)}} key="expanded">
                <InfoIcon />
              </IconButton>
        }
      </div>
    )
  }
  
  const columns = colunas.map(coluna => {
    const base = { 
                Header: coluna.cabecalho, 
                accessor: coluna.campo,
                width: coluna.largura
              }  
            if (coluna.semFiltro){
              return { 
                  ...base,
                  disableFilters: true,
                }
            }
            
            if (coluna.acoes){
              return { 
                  ...base,
                  id: 'expander', 
                  disableFilters: true,
                  disableSorting: true,
                  Cell: (props) => {
                    return criaColunaDeAcoes(coluna.acoes, props)
                  }
                }
            }

            return { 
                ...base,
                Filter: coluna.tipoFiltro ? campoFiltro(coluna.tipoFiltro) : DefaultColumnFilter,
                filter: coluna.metodoFiltro ? coluna.metodoFiltro : "text",
                sortType: 'basic'
              }    
          });


 const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    flatColumns,
    state: { pageIndex, pageSize, expanded},
  } = useTable(
    {
      columns,
      data,
      defaultColumn, 
      filterTypes,
      initialState: { pageIndex: 0, pageSize: linhasPorPagina, filters: filtroInicial || ""},
    },
    useFilters,
    useExpanded,
    useSortBy,
    usePagination,
  )

  



 return (
    <div>
      <Table {...getTableProps()} className={classes.table}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, key) => (
                <TableCell component="th" scope="row" {...column.getHeaderProps(column.getSortByToggleProps())} style={{ width: column.width }} key={`${key}-header-cell`}>
                  {column.render('Header')}
                  <span style={{cursor: "pointer"}}>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : (column.disableSorting ? '' : ' 🔽')}
                  </span>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map(
            (row, i) =>
              prepareRow(row) || (geraTableRow(row))
          )}
        </TableBody>
      </Table>
      <br />
      <div className="pagination">
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </Button>{' '}
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </Button>{' '}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </Button>{' '}
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </Button>{' '}
        <span>
          Página{' '}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Ir para página:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Exibir {pageSize} linhas por página
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}


// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'


// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

  
    
CustomReactTable.propTypes = {
  titulo: PropTypes.string,
  colunas: PropTypes.array,
  dados: PropTypes.array,
  tipoFiltro: PropTypes.oneOf(['select', 'range', 'slider']),
  metodoFiltro: PropTypes.oneOf(['fuzzyText', 'equals', 'between', 'includes']),
};
