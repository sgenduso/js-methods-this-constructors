function BookReader(book) {
  this.book = book;
  this.currentPage = 0;

}

BookReader.prototype.nextPage = function() {
  if (this.currentPage < this.book.length-1) {
  this.currentPage++;
  }
  return this.book[this.currentPage];
};

BookReader.prototype.previousPage = function() {
  if (this.currentPage > 0) {
    this.currentPage--;
  }
  return this.book[this.currentPage];
};

BookReader.prototype.pagesLeft = function() {
  return this.book.length - (this.currentPage + 1);
};

BookReader.prototype.encouragement = function() {
  var remaining = this.book.length - (this.currentPage + 1);
  if (remaining == 1) {
    return 'Keep going, this book is good \'til the last drop!';
  } else {
    return 'Keep going, only ' + remaining + ' pages left after this one!';
  }
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = BookReader;
