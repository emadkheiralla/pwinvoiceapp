package com.utc.pw.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.utc.pw.data.dto.EsnDto;
import com.utc.pw.data.entity.InvoiceStatus;
import com.utc.pw.service.InvoiceStatusService;

/**
 * Invoice Status Controller.
 * 
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino
 *         TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@CrossOrigin(origins = "*", maxAge = 3600000)
@RestController
@RequestMapping({"/api/invoice/status" })
public class InvoiceStatusController {

  @Autowired
  private InvoiceStatusService invoiceService;

  /**
   * Will find all ESN by clock number.
   */
  @RequestMapping(value = "/esn/{clockNumber}", method = RequestMethod.GET)
  public List<EsnDto> findAll(@PathVariable final String clockNumber) {
    return invoiceService.getAllEsnByClockNumber(clockNumber);
  }

  /**
   * Will find all invoice status info per Invoice Number.
   */
  @RequestMapping(value = "/{invoiceNumber}", method = RequestMethod.GET)
  public List<InvoiceStatus> findInvoiceStatus(@PathVariable final String invoiceNumber) {
    return invoiceService.getInvStatusByInvoiceNumber(invoiceNumber);
  }

  /**
   * THIS METHOD must be removed once the pagination in the UI is implemented.
   */
  @Deprecated
  @RequestMapping(value = "/all", method = RequestMethod.GET)
  public List<InvoiceStatus> findAll(HttpServletResponse response) {
    return invoiceService.getAll(0, 10000, "", response);
  }

  /**
   * Will find all invoice status info.
   */
  @RequestMapping(value = "/all/pageable", method = RequestMethod.POST)
  public List<InvoiceStatus> findAll(HttpServletResponse response//
      , @RequestParam(value = "currentPage", required = false, defaultValue = "0") int currentPage //
      , @RequestParam(value = "pageLength", required = false, defaultValue = "10") int pageLength //
      , @RequestParam(value = "sortColumn", required = false, defaultValue = "") String sortColumn) { //
    return invoiceService.getAll(currentPage, pageLength, sortColumn, response);
  }
}
