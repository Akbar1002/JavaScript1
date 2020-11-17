'use strict'

let readingList = [
    {
        bookName: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        alreadyRead: false
    },

    {
        bookName: 'Think fast and slow',
        author: 'F. Scott Fitzgerald',
        alreadyRead: true
    },

    {
        bookName: 'The Prophet',
        author: 'Kahlil Gibran',
        alreadyRead: true
    }
]

for(let i=0; i<=readingList.length-1;i++){
    console.log(`
        Book ${i+1}:
        Book name: ${readingList[i].bookName}
        Author: ${readingList[i].author}
        ${(readingList[i].alreadyRead ? 'You already read ': 'You still need to read' )}  ${readingList[i].bookName}
    `);
}




