import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Raleway', sans-serif;
  font-size: 0.8rem;
  line-height: 1.6;
  background-color: #f0f0f0;
  color: #333;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

ul {
  list-style: none;
}

::-webkit-scrollbar {	
  width: 0.6rem;
}

::-webkit-scrollbar-track {	
  /* background: #e2f3f5;	 */
}	

::-webkit-scrollbar-thumb {	
  background: #34495e;	
  border-radius: 8px;	
}	

`