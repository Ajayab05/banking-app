package com.bank.app.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.bank.app.model.Account;
import com.bank.app.repository.AccountRepository;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin
public class AccountController {

 private final AccountRepository repo;

 public AccountController(AccountRepository repo){
  this.repo = repo;
 }

 @GetMapping
 public List<Account> getAccounts(){
  return repo.findAll();
 }

 @PostMapping
 public Account create(@RequestBody Account account){
  return repo.save(account);
 }

}
