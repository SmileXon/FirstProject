package com.my.xon.dao;

import com.my.xon.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User,Integer> {
    /**
     * 按照规范提供方法的名字即可实现对数据库的增删改查。
     * 如 findByUsername，就是通过 username 字段查询到对应的行，并返回给 User 类。
     */
    User findByUsername(String username);

    User getByUsernameAndPassword(String username,String password);
}
