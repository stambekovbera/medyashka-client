import {
    FirstBookCover,
    FirstBookCharacter,
    SecondBookCover,
    SecondBookCharacter,
    ThirdBookCover,
    ThirdBookCharacter,
    FourthBookCover,
    FourthBookCharacter
} from '../assets/images';
import {IBookCard} from "../types/ContantsTypes";

export const booksCards: IBookCard[] = [
    {
        id: "01",
        bookNumber: "Книга 1",
        title: "Город мастеров-металлургов, или сквозь пространство и время",
        description: "Верхняя Пышма - особенный город, у него богатая история, индивидуальный характер, определенные устои и традиции. Именно об этом рассказывает автор своим читателям. Сказочные персонажи книги: Медяшка - Ангел-хранитель Медного царства и Золотинка - Ангел-хранитель золотых запасов, - обладает волшебной силой, благодаря которой преодолевают пространство и время. Они знакомят маленьких верхнепышминцев с достопримечательностями родного города, важными событиями, фактами из истории и современности. В том числе общаются с главной героиней - будущей школьницей Викой, она с удовольствием принимает участие в экскурсии по городу, благодаря чему пополняет свой багаж знаний, и успешно выполняет все задания, которые предлагает ей Медяшка в качестве испытаний. Недаром и имя у нее соответствующее: Виктория означает \"победа\" и \"победительница\". Еще волшебники призывают ребят играть в различные игры на свежем воздухе, поэтому повествование дополняется интересным игровым материалом.",
        year: "2011",
        bookCover: FirstBookCover,
        bookCharacter: FirstBookCharacter,
        to: "books/first_book",
        bookColor: "#F29641",
        bookLinearBackground: {
            color1: "#DB7D26",
            color2: "#F6AE6C",
        },
        bookLinearButtonBackground: {
            color1: "#FB9356",
            color2: "#F98237",
        },
        bookLinearButtonBorder: {
            color1: "#ffb98e",
            color2: "#ef5a00",
        }
    },
    {
        id: "02",
        bookNumber: "Книга 2",
        title: "Волшебное превращение, или добро пожаловать на завод",
        description: "Книга рассказывает о волшебном превращении двух друзей - Саньки и Даньки - в маленьких человечков. Причиной послужило их хулиганское поведение. И в качестве наказания Царица муравьев их заколдовала. Чтобы снять заклятие, мальчишкам необходимо выполнить задание царственной особы - добыть технологию плавки меди и золотоа. И только тогда она вернет им прежний облик. И друзья отправились в невероятное путешествие. Благодаря своему крошечному росту они побывали в Муравьином царстве и подружились с Мурашкой. Затем все вместе оказались на промышленном предприятии и встретили доброго Ангела-хранителя - Медяшку. С помощью его волшебной силы, перемещаясь в пространстве с большой скоростью, они побывали во всех цехах завода, познакомились с основными профессиями, узнали много нового для себя о металлургии и металлах. Экскурсия оказалась интересной и познавательной. Ребята не только вернули свой человеческий рост, но еще и повзрослели: набрались ума-разума. В будущем Санька и Данька мечтают получить нужную профессию и прийти работать на завод.",
        year: "2012",
        bookCover: SecondBookCover,
        bookCharacter: SecondBookCharacter,
        to: "books/second_book",
        bookColor: "#9A3D43",
        bookLinearBackground: {
            color1: "#883729",
            color2: "#C76756",
        },
        bookLinearButtonBackground: {
            color1: "#ad5443",
            color2: "#9E4839",
        },
        bookLinearButtonBorder: {
            color1: "#CA7465",
            color2: "#772A1D",
        }
    },
    {
        id: "03",
        bookNumber: "Книга 3",
        title: "С мечтой на 100 лет вперед, или берегите природу",
        description: "Верхняя Пышма - особенный город, у него богатая история, индивидуальный характер, определенные устои и традиции. Именно об этом рассказывает автор своим читателям. Сказочные персонажи книги: Медяшка - Ангел-хранитель Медного царства и Золотинка - Ангел-хранитель золотых запасов, - обладает волшебной силой, благодаря которой преодолевают пространство и время. Они знакомят маленьких верхнепышминцев с достопримечательностями родного города, важными событиями, фактами из истории и современности. В том числе общаются с главной героиней - будущей школьницей Викой, она с удовольствием принимает участие в экскурсии по городу, благодаря чему пополняет свой багаж знаний, и успешно выполняет все задания, которые предлагает ей Медяшка в качестве испытаний. Недаром и имя у нее соответствующее: Виктория означает \"победа\" и \"победительница\". Еще волшебники призывают ребят играть в различные игры на свежем воздухе, поэтому повествование дополняется интересным игровым материалом.",
        year: "2013",
        bookCover: ThirdBookCover,
        bookCharacter: ThirdBookCharacter,
        to: "books/third_book",
        bookColor: "#ADC239",
        bookLinearBackground: {
            color1: "#9BAF2D",
            color2: "#D4E477",
        },
        bookLinearButtonBackground: {
            color1: "#B0C348",
            color2: "#A2B744",
        },
        bookLinearButtonBorder: {
            color1: "#E0F184",
            color2: "#809417",
        }
    },
    {
        id: "04",
        bookNumber: "Книга 4",
        title: "Мой любимый город, или занимательные игры с Медяшкой",
        description: "Верхняя Пышма - особенный город, у него богатая история, индивидуальный характер, определенные устои и традиции. Именно об этом рассказывает автор своим читателям. Сказочные персонажи книги: Медяшка - Ангел-хранитель Медного царства и Золотинка - Ангел-хранитель золотых запасов, - обладает волшебной силой, благодаря которой преодолевают пространство и время. Они знакомят маленьких верхнепышминцев с достопримечательностями родного города, важными событиями, фактами из истории и современности. В том числе общаются с главной героиней - будущей школьницей Викой, она с удовольствием принимает участие в экскурсии по городу, благодаря чему пополняет свой багаж знаний, и успешно выполняет все задания, которые предлагает ей Медяшка в качестве испытаний. Недаром и имя у нее соответствующее: Виктория означает \"победа\" и \"победительница\". Еще волшебники призывают ребят играть в различные игры на свежем воздухе, поэтому повествование дополняется интересным игровым материалом.",
        year: "2015",
        bookCover: FourthBookCover,
        bookCharacter: FourthBookCharacter,
        to: "books/fourth_book",
        bookColor: "#E1B41F",
        bookLinearBackground: {
            color1: "#BC9515",
            color2: "#FCD247",
        },
        bookLinearButtonBackground: {
            color1: "rgba(215, 175, 42, 0.7)",
            color2: "#D7AF2A",
        },
        bookLinearButtonBorder: {
            color1: "#FFE799",
            color2: "rgba(136, 106, 7, 0.26)",
        }
    },
];