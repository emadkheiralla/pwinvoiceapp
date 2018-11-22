package com.utc.pw.service;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.utc.pw.data.dto.EsnDto;
import com.utc.pw.data.entity.InvoiceStatus;

/**
 * Service definition for Invoice Status.
 * 
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
public interface InvoiceStatusService {

  List<EsnDto> getAllEsnByClockNumber(String clockNumber);

  List<InvoiceStatus> getInvStatusByInvoiceNumber(String invoiceNumber);

  List<InvoiceStatus> getAll(int page, int pageLength, String sortColumn, HttpServletResponse response);

}
