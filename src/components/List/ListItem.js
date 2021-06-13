import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
function ListItem({key,item}) {
    return (
        <div className="list-item" data-id={key} data-page-id={item.pageId}>
                <div className="list-item__title">{item.title}</div>
                <div className="list-item__snippet" data-id={key}>{ReactHtmlParser(item.snippet)}</div>
        </div>
    );
};

export default ListItem;
