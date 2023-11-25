import styled from 'styled-components';

 const UITABLE = {
     Container: styled.div<{ height?: string; }>`
    width: 100%;
    height: ${({height}) => height||"30vh" };
    display: flex;
    justify-content: center;
    align-items: center;
    `,
     Table: styled.table<{
         border?: string;
         cellpadding?: string;
     }>`
     border: ${({ border, theme }) => border || `1px solid ${theme.color.gray._3}`};
    & td,
    & th {
      padding: ${({cellpadding}) => cellpadding|| "10px 20px"} ;
      border: ${({ border, theme }) => border || `1px solid ${theme.color.gray._3}`};
    }

     `,
     THead: styled.thead<{bgcolor?:string;}>`
        background-color: ${({ bgcolor, theme }) => bgcolor || theme.color.gray._5 };
    `,
     TData: styled.td`

     
     `,
     THeadCell: styled.th<{
         border?: string;
         cellpadding?: string;
     }>`
      padding: ${({cellpadding}) => cellpadding|| "10px 20px"} ;
      border: ${({ border, theme }) => border || `1px solid ${theme.color.gray._3}`};
     font-weight: bold;
     `,
     TRowCell: styled.td<{
         border?: string;
         cellpadding?: string;
     }>`
           padding: ${({cellpadding}) => cellpadding|| "10px 20px"} ;
      border: ${({ border, theme }) => border || `1px solid ${theme.color.gray._3}`};
     `
 }

 export default UITABLE