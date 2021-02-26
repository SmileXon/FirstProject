package com.my.xon.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
// 实体类标识
@Entity
// 对应数据库表名
@Table(name = "user")
// JPA工作过程，忽略无需json化的属性
@JsonIgnoreProperties({"handler","hibernateLazyInitializer"})
public class User {
    // 表示此表的主键
    @Id
    // 主键生成策略
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // 数据库表对应的字段
    @Column(name = "id")
    int id;
    String username;
    String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
