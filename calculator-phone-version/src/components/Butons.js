import React from 'react'
import "./style.css"

function Butons({ setSayı, sayı, ıslem, setIslem, ikinciSayı, setIkinciSayı, setSonuc, sonuc }) {

    function artı() {
        if (sayı !== "") {
            setIslem("+")
        }
    }
    function eksi() {
        if (sayı !== "") {
            setIslem("-")
        }
    }
    function carpı() {
        if (sayı !== "") {
            setIslem("*")
        }
    }
    function bolme() {
        if (sayı !== "") {
            setIslem("/")
        }
    }

    function sıfır() {
        if (ıslem !== "") { setIkinciSayı(ikinciSayı + "0") }
        else
            setSayı(sayı + "0");

    }

    function bir() {
        if (ıslem !== "") { setIkinciSayı(ikinciSayı + "1") }
        else
            setSayı(sayı + "1");
    }

    function iki() {
        if (ıslem !== "") { setIkinciSayı(ikinciSayı + "2") }
        else
            setSayı(sayı + "2");
    }

    function uc() {
        if (ıslem !== "") { setIkinciSayı(ikinciSayı + "3") }
        else
            setSayı(sayı + "3");
    }

    function dort() {
        if (ıslem !== "") { setIkinciSayı(ikinciSayı + "4") }
        else
            setSayı(sayı + "4");
    }

    function bes() {
        if (ıslem !== "") { setIkinciSayı(ikinciSayı + "5") }
        else
            setSayı(sayı + "5");
    }

    function altı() {
        if (ıslem !== "") { setIkinciSayı(ikinciSayı + "6") }
        else
            setSayı(sayı + "6");
    }

    function yedi() {
        if (ıslem !== "") { setIkinciSayı(ikinciSayı + "7") }
        else
            setSayı(sayı + "7");
    }

    function sekiz() {
        if (ıslem !== "") { setIkinciSayı(ikinciSayı + "8") }
        else
            setSayı(sayı + "8");
    }

    function dokuz() {
        if (ıslem !== "") { setIkinciSayı(ikinciSayı + "9") }
        else
            setSayı(sayı + "9");
    }
    function allDelete() {
        setIslem("")
        setSayı("")
        setIkinciSayı("")
        setSonuc("")
    }
    function enter() {
        if (ikinciSayı !== "" && ıslem === "-") {
            setSonuc(sayı - ikinciSayı)
            setIslem("")
            setSayı("")
            setIkinciSayı("")
        }
        if (ikinciSayı !== "" && ıslem === "*") {
            setSonuc(sayı * ikinciSayı)
            setIslem("")
            setSayı("")
            setIkinciSayı("")
        }
        if (ikinciSayı !== "" && ıslem === "/") {
            setSonuc(sayı / ikinciSayı)
            setIslem("")
            setSayı("")
            setIkinciSayı("")
        }
        if (ikinciSayı !== "" && ıslem === "+") {
            setSonuc(Number(sayı) + Number(ikinciSayı))
            setIslem("")
            setSayı("")
            setIkinciSayı("")
        }

    }

    return (
        <div>
            <div>
                <div className="container" id='container'>
                    <div className="row gap-4 col-3 mx-auto ">
                        <div className="col-2">
                            <button onClick={yedi} id="yedi" className='btn btn-primary p-4 border btn-outline-dark fs-2'>7</button>
                        </div>
                        <div className="col-2">
                            <button onClick={sekiz} id="sekiz" className='btn btn-primary p-4 border btn-outline-dark fs-2'>8</button>

                        </div>
                        <div className="col-2">
                            <button onClick={dokuz} id="dokuz" className='btn btn-primary p-4 border btn-outline-dark fs-2'>9</button>

                        </div>
                        <div className="col-2">
                            <button onClick={bolme} id="slash" className='btn btn-primary p-4 border btn btn-warning btn-outline-dark btn-outline-dark fs-2'>/</button>

                        </div>
                    </div>
                </div>
                <div className="container" id='container'>
                    <div className="row gap-4 col-3 mx-auto ">
                        <div className="col-2">
                            <button onClick={dort} id="dört" className='btn btn-primary p-4 border btn-outline-dark fs-2'>4</button>
                        </div>
                        <div className="col-2">
                            <button onClick={bes} id="beş" className='btn btn-primary p-4 border btn-outline-dark fs-2'>5</button>

                        </div>
                        <div className="col-2">
                            <button onClick={altı} id="altı" className='btn btn-primary p-4 border btn-outline-dark fs-2'>6</button>

                        </div>
                        <div className="col-2">
                            <button onClick={carpı} id="çarpı" className='btn btn-primary p-4 border btn btn-warning btn-outline-dark btn-outline-dark fs-2'>x</button>

                        </div>
                    </div>
                </div>
                <div className="container" id='container'>
                    <div className="row gap-4 col-3 mx-auto ">
                        <div className="col-2">
                            <button onClick={bir} id="bir" className='btn btn-primary p-4 border btn-outline-dark fs-2'>1</button>
                        </div>
                        <div className="col-2">
                            <button onClick={iki} id="iki" className='btn btn-primary p-4 border btn-outline-dark fs-2'>2</button>

                        </div>
                        <div className="col-2">
                            <button onClick={uc} id="üç" className='btn btn-primary p-4 border btn-outline-dark fs-2'>3</button>

                        </div>
                        <div className="col-2">
                            <button onClick={eksi} id="eksi" className='btn btn-primary p-4 border btn btn-warning btn-outline-dark btn-outline-dark fs-2'>-</button>

                        </div>
                    </div>
                </div>
                <div className="container" id='container'>
                    <div className="row gap-4 col-3 mx-auto ">
                        <div className="col-2">
                            <button onClick={allDelete} id="alldelete" className='btn btn-primary p-4 border btn btn-danger btn-outline-dark fs-2'>C</button>
                        </div>
                        <div className="col-2">
                            <button onClick={sıfır} id="sıfır" className='btn btn-primary p-4 border btn-outline-dark fs-2'>0</button>

                        </div>
                        <div className="col-2">
                            <button onClick={enter} id="enter" className='btn btn-primary p-4 border btn btn-secondary btn-outline-dark fs-2'>=</button>

                        </div>
                        <div className="col-2">
                            <button onClick={artı} id="artı" className='btn btn-primary p-4 border btn btn-warning btn-outline-dark fs-2 ' >+</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Butons