package com.utc.pw.data.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.utc.pw.data.entity.InvoiceStatus;

/**
 * Repository class for the Invoice Status.
 * 
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@Repository
public interface InvoiceStatusRepository extends CrudRepository<InvoiceStatus, String> {
  List<InvoiceStatus> findByInvoiceNumber(String invoiceNumber);

  List<InvoiceStatus> findByClockNumber(String clockNumber);

  Page<InvoiceStatus> findAll(Pageable pageable);
}
