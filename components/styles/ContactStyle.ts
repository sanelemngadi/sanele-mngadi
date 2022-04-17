import styled from "styled-components";


export const Contacts = styled.div`
    margin: 1rem;
    border-radius: 1rem;
    box-shadow: 1rem 1rem 2rem rgba(0,0,0,.3);
    margin-top: 20rem;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    padding: 1rem;
    min-height: 29rem;

    section{
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .container{
        display: grid;
        grid-template-columns: 1fr;
    }
    @media (min-width: 768px){
        .container{
        grid-template-columns: 1fr 1fr;
        }

        section{
            padding: 1rem;
            img{
                width: 293px !important;
                height: 270px !important;
            }
        }
        form{
            padding: 1rem;
           
            max-width: 25rem;
        }
        
    }

    @media (min-width: 992px){
            margin: 014rem 0rem 0 0rem;
            border-radius: 0;
            padding-top: 5rem;
            height: 40rem;
            background-color: ${({ theme }) => theme.colors.primary};
            .container{
                box-shadow: 1rem 1rem 2rem rgba(0,0,0,.1);
                border: 2px solid ${({ theme }) => theme.colors.secondary};
                padding: 1rem;
                background-color: #fff;
                border-radius: .5rem;
            }
            form{
            padding: 1rem;
            border-radius: .5rem;
            box-shadow: 1rem 1rem 2rem rgba(0,0,0,.1);
            }
        }
`

export const ContactForm = styled.form`
    //border: 1px solid black;
    // min-width: 24rem;
    label{
        display: block;
        font-weight: 500;
    }
    p{
        margin: .5rem 0;
        input{
            width: 100%;
            height: 3.125rem;
            font-weight: 700;
        }
        textarea{
            width: 100%;
            height: 5rem;
        }
        input[type="submit"]{
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.secondary};
            font-size: 1.125rem;
            border: none;
            border-radius: .3rem;
            cursor: pointer;
        }
    }
`