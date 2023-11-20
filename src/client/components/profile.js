import { useFetchUserByNickQuery, useGetSubscriptionsQuery, useSubscribeMutation, useUnsubscribeMutation } from "../store/services/users_service";
import React, { useState } from "react";
import GoodsMin from "./goods_min";
import { useFetchGoodsByNickQuery } from "../store/services/goods_service";
import { Rating } from 'flowbite-react';
import { useEffect } from "react";

import { pageSize } from "../../config";

function Profile(props) {

    const { data, isLoading, error } = useFetchUserByNickQuery(window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop())
    const { data: subs, isLoading: loadingSubs, error: errorSubs } = useGetSubscriptionsQuery()

    const [ activeTab, setActiveTab ] = useState(0);

    const [subscribe, result] = useSubscribeMutation()
    const [unsubscribe, result2] = useUnsubscribeMutation()

    const [inputs, setInputs] = useState();
    const [valid, setValid] = useState(false);

    function validate(e) {
        var maxfilesize = 1024 * 1024,  // 1 Mb
            filesize    = e.target.files[0].size,
            fileName    = e.target.files[0].name,
            warningel   = document.getElementById( 'lbError' );
        
        if ( fileName.split('.').pop() !== 'png' && fileName.split('.').pop() !== 'jpg' && fileName.split('.').pop() !== 'jpeg' ) {
            warningel.innerHTML = "Файл должен быть .png, .jpg либо .jpeg";
            setValid(true);
        }
        else if ( filesize > maxfilesize ) {
          warningel.innerHTML = "Файл слишком большой: " + filesize + ". Максимальный размер: " + maxfilesize;
          setValid(true);
        }
        else {
          warningel.innerHTML = '';
          setValid(false);
        }   
      }

    useEffect(() => {
        if (data)
            setInputs({
                name: data.user[0][0].name,
                surname: data.user[0][0].surname,
                about: data.user[0][0].about,
                city: data.user[0][0].city,
                birthday: data.user[0][0].birthday,
                telegram: data.user[0][0].contacts?.telegram
            });
    }, [data]);

    function input(e) {
        setInputs({...inputs, [e.target.id]: e.target.value});
    }

    return (
        <div>
            {isLoading ?
                'Подождите, идет загрузка...' :
            error ?
                error.data.error :
                <div>
                    <div className="border-b-8 border-neutral-300 text-4xl pt-12 pl-5 pb-2">Страница пользователя</div>
                    {data.login ? <div className="border-b-4 border-neutral-300 mb-2 mt-3">
                        <div className={"text-xl inline-block p-1 mx-2 " + (activeTab === 0 ? "bg-neutral-400" : "bg-neutral-300")} onClick={() => setActiveTab(0)}>Профиль</div>
                        <div className={"text-xl inline-block p-1 mx-2 " + (activeTab === 1 ? "bg-neutral-400" : "bg-neutral-300")} onClick={() => setActiveTab(1)}>Редактирование</div>
                        <div className={"text-xl inline-block p-1 mx-2 " + (activeTab === 2 ? "bg-neutral-400" : "bg-neutral-300")} onClick={() => setActiveTab(2)}>Подписки</div>
                        <div className={"text-xl inline-block p-1 mx-2 " + (activeTab === 3 ? "bg-neutral-400" : "bg-neutral-300")} onClick={() => setActiveTab(3)}>Избранное</div>
                    </div> : null}
                    <div className={activeTab === 0 ? "block" : "hidden"}>
                        <div className="w-11/12 md:w-3/5 md:inline-block"><GoodsMin pageSize={pageSize / 2} option={"profile"}/></div>
                        <div className="w-full md:w-2/5 md:inline-block md:float-right pl-16 pt-10">
                            <div>
                                <h3 className="inline-block text-5xl align-top" style={{height: '115px'}}>{data.user[0][0].nickname}</h3>
                                <img className="inline-block float-right mr-10" width="115" height="115" src={data.user[0][0].avatar ? "/avatars/" + data.user[0][0].avatar : "/service_photos/default_avatar.jpg"} alt="avatar"/>
                            </div>
                            <p className="text-3xl break-words">{data.user[0][0].name && data.user[0][0].surname ? data.user[0][0].name + " " + data.user[0][0].surname : data.user[0][0].name ? data.user[0][0].name : "Аноним"}</p>
                            <p className="text-xl mt-8 break-words">{data.user[0][0].about}</p>
                            <p className="text-3xl mt-8 break-words">{data.user[0][0].city}</p>
                            {data.user[0][0].contacts && data.user[0][0].contacts.telegram ? <p className="text-3xl mt-8 break-words underline"><a href={data.user[0][0].contacts.telegram}>Телеграм</a></p> : null}
                            {/* <div className="mt-8">
                                <Rating size={"md"}>
                                    <Rating.Star filled={data.user[0][0].rating > 0.5} />
                                    <Rating.Star filled={data.user[0][0].rating > 1.5} />
                                    <Rating.Star filled={data.user[0][0].rating > 2.5} />
                                    <Rating.Star filled={data.user[0][0].rating > 3.5} />
                                    <Rating.Star filled={data.user[0][0].rating > 4.5} />
                                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {data.user[0][0].rating} из 5
                                    </p>
                                </Rating>
                            </div> */}
                            {data.login === false ? loadingSubs ?
                                'Подождите, идет загрузка...' :
                            errorSubs ?
                                errorSubs.data.error : subs.subscriptions[0][0].find(e => e.userId === data.user[0][0].id) ? <button onClick={() => unsubscribe(data.user[0][0].id)}
                                    className="mt-8 px-4 py-1.5 border border-neutral-400 bg-neutral-50 hover:text-white hover:bg-neutral-600">Отписаться</button>
                                : <button onClick={() => subscribe(data.user[0][0].id)}
                                    className="mt-8 px-4 py-1.5 border border-neutral-400 bg-neutral-50 hover:text-white hover:bg-neutral-600">Подписаться</button>
                                : null}
                        </div>
                    </div>
                    <div className={activeTab === 1 ? "block" : "hidden"}>
                        <form action={"/api/users/" + data.user[0][0].id} method="POST" enctype="multipart/form-data">
                            <div className="md:mx-auto md:w-1/4">
                                <div className="my-2">
                                    <label for="name" className="inline-block w-1/3">Имя:</label><input value={inputs?.name} onInput={input} name="name" id="name" className="w-2/3 border border-neutral-400"/>
                                </div>
                                <div className="my-2">
                                    <label for="surname" className="inline-block w-1/3">Фамилия:</label><input value={inputs?.surname} onInput={input} name="surname" id="surname" className="w-2/3 border border-neutral-400"/>
                                </div>
                                <div className="my-2">
                                    <label className="inline-block mr-2">Аватарка:</label><input onChange={validate} type="file" name="photo" accept=".png,.jpg,.jpeg"/>
                                </div>
                                <div id='lbError' className='text-red-600'></div>
                                <div className="my-2">
                                    <label for="about" className="inline-block w-1/3">Био:</label><textarea value={inputs?.about} onInput={input} name="about" id="about" className="w-2/3 border border-neutral-400"/>
                                </div>
                                <div className="my-2">
                                    <label for="city" className="inline-block w-1/3">Город:</label><input value={inputs?.city} onInput={input} name="city" id="city" className="w-2/3 border border-neutral-400"/>
                                </div>
                                <div className="my-2">
                                    <label for="birthday" className="inline-block w-1/3">Др:</label><input value={inputs?.birthday} onInput={input} name="birthday" type="date" id="birthday" className="w-2/3 border border-neutral-400"/>
                                </div>
                                <div className="my-2">
                                    <label for="telegram" className="inline-block w-1/3">Телеграм(ссылка):</label><input value={inputs?.telegram} onInput={input} name="telegram" id="telegram" className="w-2/3 border border-neutral-400"/>
                                </div>
                                <div className="my-2">
                                    <label className="inline-block w-1/3">Пароль:</label><input name="pass" className="w-2/3 border border-neutral-400" pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$"/>
                                </div>
                                <div className="text-center my-2">
                                    <input disabled={valid} type="submit" className="px-4 py-1.5 border border-neutral-400 bg-neutral-50 hover:text-white hover:bg-neutral-600"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={activeTab === 2 ? "block" : "hidden"}>
                        {loadingSubs ?
                                'Подождите, идет загрузка...' :
                            errorSubs ?
                                errorSubs.data.error : subs.subscriptions[0][0].map(e => <div>
                            <img width="40" height="40"
                                src={e.user.avatar ? "/avatars/" + e.user.avatar : "/service_photos/default_avatar.jpg"}
                                className="inline-block mx-10" alt="avatar"/>
                            <span className="text-lg inline-block mr-10 md:mr-40"><a href={"/user/" + e.user.nickname}>{e.user.nickname}</a></span>
                            <button onClick={() => unsubscribe(e.user.id)}
                                className="mt-8 px-4 py-1.5 border border-neutral-400 bg-neutral-50 hover:text-white hover:bg-neutral-600">Отписаться</button>
                        </div>)}
                    </div>
                    <div className={activeTab === 3 ? "block" : "hidden"}>
                        <GoodsMin pageSize={pageSize} option={"favorites"}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile;