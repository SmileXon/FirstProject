package com.my.xon.service;


import com.my.xon.dao.BookDAO;
import com.my.xon.pojo.Book;
import com.my.xon.pojo.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookDAO bookDAO;

    private final CategoryService categoryService;

    @Autowired
    public BookService(BookDAO bookDAO,CategoryService categoryService) {
        this.bookDAO = bookDAO;
        this.categoryService = categoryService;
    }

    public List<Book> list() {
        Sort sort = Sort.by(Sort.Direction.DESC, "id");
        return bookDAO.findAll(sort);
    }

    public void addOrUpdate(Book book) {
        bookDAO.save(book);
    }

    public void deleteById(int id) {
        bookDAO.deleteById(id);
    }

    public List<Book> listByCategory(int cid) {
        Category category = categoryService.get(cid);
        return bookDAO.findAllByCategory(category);
    }

    public List<Book> Search(String keywords) {
        return bookDAO.findAllByTitleLikeOrAuthorLike('%' + keywords + '%', '%' + keywords + '%');
    }

}

