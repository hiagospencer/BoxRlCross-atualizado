import styled, {css} from "styled-components";

export const Container = styled.header`

${({isMenuOpen}) => isMenuOpen ? css`width: 15.3rem;` : css`width: 7.75rem;`}

    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding: 2rem 0;

    transition: width 0.3s;
    background: ${({ theme }) => theme.colors.red};

    button {
        background:none ;
        width: 100%;
        cursor: pointer;
        border: none;
    }

    nav {
        flex:1;
        width: 100%;
        height:100%;

        ul {
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;
        }

        li {
            a {
                width: fit-content;
                position: relative;
                padding-left: 1.875rem;
                padding-right: 1.875rem;

                display: flex;
                align-items: center;
                gap: 2rem;

                svg {
                    width: 3rem;
                    height: 3rem;
                    transition: fill 0.3s;
                }

                span {
                    font-size: 1rem;
                    font-weight: 600;
                    transition: color 0.3s;
                    margin-left: 15px;

                    color: ${({ theme }) => theme.colors.white};
                }

                &.active{
                    &::after{
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        bottom:0;
                        transform: translateY(-50%);

                        background-color: ${({theme}) => theme.colors.yellow};
                        width: 5px;
                        height:calc(100% + 10px);

                        border-radius: 0 5px 5px 0;
                    }

                    svg {
                        fill: ${({theme}) => theme.colors.yellow};
                    }

                    span {
                        color: ${({theme}) => theme.colors.yellow};
                    }
                }
            }
        }
    }

    @media (max-width: 720px){
        position: fixed;
        left:0;
        right:0;
        bottom:0;
        z-index:999;

        width: 100%;
        height: 5rem;
        padding:0 0;
        overflow-y: auto;
        button{
            display: none;
        }

        nav {
            height: 100%;

            ul {
                flex-direction: row;
                align-items: center;
            }

            li{
                a {
                    flex-direction:row;
                    padding: 0;

                    svg {
                        width: 2.55rem;
                        height: 2.55rem;
                        padding: 0 1%;
                    }
                    span{
                        display: none;
                    }
                    &.active{
                        &::after{
                            display: none;
                        }
                    }
                }
            }
        }
    }
`;
