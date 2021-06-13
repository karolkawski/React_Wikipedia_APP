import React, {useState} from 'react';
import List from '../../components/List/List';
import Button from '../../components/Button/Button';
import Alert from '../../components/Alert/Alert';
import './WikipediaViewer.css';


function WikipediaViewer() {
    const [searchValue, setSearchValue] = useState('');
    const [replaceValue, setReplaceValue] = useState('');
    const [count, setCount] = useState(0)
    const [searchInfo, setSearchInfo] = useState('')
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [alert, setAlert] = useState({
        text: '',
        modificator: '',
    })
    const [items, setItems] = useState([]);

    const serverUrl = 'https://en.wikipedia.org/w/api.php?origin=*&action=';

    const fetchData = () => {
        fetch(serverUrl + `query&list=search&format=json&srsearch=%22${searchValue}%22&srlimit=10`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.query.search);
            setCount(result.query.search ? result.query.search.length : 0)
            setSearchValue('');
          },
          (error) => {
            setIsLoaded(true);
            setError(error);

            setAlert({
                text: `[ERROR] fetch data`,
                modificator: 'red'
            })
          }
        )
    }
    const handleChangeSearchValue = (e) => {

        setSearchValue(e.currentTarget.value);
        setSearchInfo(e.currentTarget.value)
        setReplaceValue('');

    }

    const handleOnKeyDownSearchValue = (e) => {

        if (e.key === "Enter") {
            fetchData();
        }
    }

    const handleChangeReplaceValue = (e) => {
        setReplaceValue(e.currentTarget.value);
    }

    const handleSearchClick = (e) => {
        fetchData()
    }

    const handleHideAlertBox = () => {
        setAlert(
            {
                text: ``,
                modificator: ''
            })
    }
    const handleReplaceClick = (e) => {
        let mapped = items.map((item, index) => {
            if (index == 0) {
                item.snippet = item.snippet.replace(searchInfo, replaceValue);
            }
            return item;
          });
          setItems(mapped)

          setAlert({
            text: `Replaced first ${searchInfo} to ${replaceValue}`,
            modificator: 'green'

        })

    }


    const handleReplaceAllClick = (e) => {
     
        let mapped = items.map((item, index) => {
                item.snippet = item.snippet.replaceAll(searchInfo, replaceValue);
        return item;

          });
          
          setItems(mapped);

          setAlert({
            text: `Replaced all ${searchInfo} to ${replaceValue}`,
            modificator: 'green'

        })
    }

    return (
        <div className="wikipedia-viewer">
            <div className="wikipedia-viewer__wrapper">
                <div className="wikipedia-viewer__search">
                    <input className="wikipedia-viewer__input wikipedia-viewer__input--search" onChange={handleChangeSearchValue} onKeyDown={handleOnKeyDownSearchValue} value={searchValue} type="text" placeholder="Search..."/>
                    <Button text="Search" modificator={'search'} handleClick={handleSearchClick}/>
                </div>
                <div className="wikipedia-viewer__actions">
                    <input className="wikipedia-viewer__input wikipedia-viewer__input--replace" onChange={handleChangeReplaceValue} value={replaceValue} type="text" placeholder="Replace..."/>
                    <Button text="Replace" modificator={'replace'} handleClick={handleReplaceClick}/>
                    <Button text="Reaplce all" modificator={'replace-all'} handleClick={handleReplaceAllClick}/>
                </div>
                <div className="wikipedia-viewer__counter">Search: {searchInfo} | {count} items</div>
                <div className="wikipedia-viewer__list">
                    <List items={items}/>
                </div>
                <div className="wikipedia-viewer__alert">
                    <Alert text={alert.text} modificator={alert.modificator} handleHideAlertBox={handleHideAlertBox}/>
                </div>
            </div>
        </div>
    );
};

export default WikipediaViewer;