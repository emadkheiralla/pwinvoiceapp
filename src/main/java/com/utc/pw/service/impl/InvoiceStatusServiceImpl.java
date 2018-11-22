package com.utc.pw.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.utc.pw.data.dto.EsnDto;
import com.utc.pw.data.entity.InvoiceStatus;
import com.utc.pw.data.repository.InvoiceStatusRepository;
import com.utc.pw.service.InvoiceStatusService;
import com.utc.pw.util.Constants;

/**
 * Service implementation for Invoice Status.
 * 
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino
 *         TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@Service
public class InvoiceStatusServiceImpl implements InvoiceStatusService {

  @Autowired
  private InvoiceStatusRepository repository;
  InvoiceStatus invoicestatus;

  @Override
  public List<InvoiceStatus> getInvStatusByInvoiceNumber(String invoiceNumber) {
    List<InvoiceStatus> invoiceStatuses = repository.findByInvoiceNumber(invoiceNumber);

    return invoiceStatuses;
  }

  @Override
  public List<EsnDto> getAllEsnByClockNumber(String clockNumber) {
    List<InvoiceStatus> invoiceStatuses = repository.findByClockNumber(clockNumber);
    Set<EsnDto> result = new HashSet<EsnDto>();
    for (InvoiceStatus invoiceStatus : invoiceStatuses) {
      EsnDto dto = new EsnDto();
      dto.setEsn(invoiceStatus.getEsn());
      result.add(dto);
    }
    return new ArrayList<EsnDto>(result);
  }

  @Override
  public List<InvoiceStatus> getAll(int page, int pageLength, String sortColumn, HttpServletResponse response) {
    if (pageLength == 0) {
      pageLength = Constants.DEFAULT_PAGINATION_PAGE_SIZE;
    }
    Page<InvoiceStatus> result = null;
    if (sortColumn == null || sortColumn.equals("")) //no sorting
      result = repository.findAll(PageRequest.of(page, pageLength));
    else
      result = repository.findAll(PageRequest.of(page, pageLength, Sort.by(sortColumn)));

    response.setHeader("Pageable-Current-Page", "" + result.getPageable().getPageNumber());
    response.setHeader("Pageable-Total-Pages", "" + result.getTotalPages());
    response.setHeader("Pageable-Total-Elements", "" + result.getTotalElements());
    return result.getContent();

  }

}
