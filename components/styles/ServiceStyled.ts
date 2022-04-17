import styled from "styled-components";

export const ServiceStyle = styled.div`
    display: grid;
    margin: 2rem 0;
    grid-template-columns: 1fr;
    grid-template-areas: "one"
                        "two"
                        "two"
                        "three"
                        "three"
                        "four"
                        "four";

    .card_image{
        display: flex;
        justify-content:center;
        align-items: center;
        margin-bottom: 2rem;
    }

    p,h4{
        text-align: center;
    }
    .service_heading{
        grid-area: one;

        p{
            text-align:center;
            margin-bottom: 2rem;
        }
    }
    .service_card_one{
        grid-area: two;
    }
    .service_card_two{
        grid-area: three;
    }
    .service_card_three{
        grid-area: four;

        img{
            border-radius: 0.5rem;
        }
    }

    @media (min-width: 768px){
        display: grid;
        margin: 2rem 0;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "one one"
                            "two two"
                            "two two"
                            "three four"
                            "three four";

        .service_card_two{
            grid-area: three;

            margin-right: 1rem;
        }
        
    }

    @media (min-width: 992px){
        display: grid;
        margin: 2rem 0 8rem 0;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "one one one"
                            "two three four"
                            "two three four";

        .service_card_two{
            grid-area: three;

            margin:0 1rem;
        }
        .service_heading{
        h1{
            font-size:3rem;
        }

        p{
            text-align:start;
        }
    }
    }
`

export const ServiceCard = styled.div`
    border:1px solid silver;
    padding: 2rem;
    margin: .3rem 0;
    border-radius: .5rem;

    .card_image {
        height: 7.2rem;
    }
`