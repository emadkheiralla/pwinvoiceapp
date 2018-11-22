package com.utc.pw.data.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * The persistent class for the InvoiceStatus database table.
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@Entity
@Table(name = "InvoiceStatus", schema = "appl")
@lombok.Getter
@lombok.Setter
@lombok.NoArgsConstructor
public class InvoiceStatus implements Serializable {
  private static final long serialVersionUID = 1L;

  @Id
  @SequenceGenerator(name = "INVOICESTATUS_INVOICESTATUSSEQ_GENERATOR")
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "INVOICESTATUS_INVOICESTATUSSEQ_GENERATOR")
  @Column(name = "InvoiceStatusSeq")
  private Long invoiceStatusSeq;

  @Column(name = "[90DaysDate]")
  private Date DaysDate; // needs create java class do 90 days calculation

  @Column(name = "ClockNumber", columnDefinition = "nvarchar(255)")
  private String clockNumber;

  @Column(name = "ClockStartDate")
  private Date clockStartDate;

  @Column(name = "ClockStartEmailDate")
  private Date clockStartEmailDate;

  @Column(name = "CreditStatus", columnDefinition = "nvarchar(255)")
  private String creditStatus;

  @Column(name = "CurrentStatus", columnDefinition = "nvarchar(255)")
  private String currentStatus;

  @Column(name = "DisputeAmount", columnDefinition = "money")
  private BigDecimal disputeAmount;

  @Column(name = "DisputeCreditAmount", columnDefinition = "money")
  private BigDecimal disputeCreditAmount;

  @Column(name = "DisputeCreditReceived")
  private Date disputeCreditReceived;

  @Column(name = "DisputeNotes", columnDefinition = "nvarchar(255)")
  private String disputeNotes;

  @Column(name = "DisputeOpenDate")
  private Date disputeOpenDate;

  @Column(name = "DisputePaymentAmount", columnDefinition = "money")
  private BigDecimal disputePaymentAmount;

  @Column(name = "DisputeSettledDate")
  private Date  disputeSettledDate;

  @Column(name = "DisputeStatus", columnDefinition = "nvarchar(255)")
  private String disputeStatus;

  @Column(name = "EngineModel", columnDefinition = "nvarchar(255)")
  private String engineModel;

  @Column(name = "EngineShipDate")
  private Date engineShipDate;

  @Column(name = "EngineType", columnDefinition = "nvarchar(255)")
  private String engineType;

  @Column(name = "ESN", columnDefinition = "nvarchar(255)")
  private String esn;

  @Column(name = "EventID")
  private Long eventID;

  @Column(name = "EventType", columnDefinition = "nvarchar(255)")
  private String eventType;

  @Column(name = "EXWAmount", columnDefinition = "money")

  private BigDecimal EXWAmount;

  private Date EXWAnalystResponse;

  private Date EXWContractDueDate;

  private Date EXWDueDate;

  private Date EXWEmailDate;

  private Date EXWFMReply;

  private Date EXWMetricsExcludeClosedDate;

  private Date EXWMetricsExcludeOpenDate;

  @Column(name = "EXWMetricsExcludeReason", columnDefinition = "nvarchar(255)")
  private String EXWMetricsExcludeReason;

  @Column(name = "EXWNotes", columnDefinition = "nvarchar(255)")
  private String EXWNotes;

  @Column(name = "FOD")
  private boolean fod;

  @Column(name = "InductionDate")
  private Date inductionDate;

  @Column(name = "InsertedBy", columnDefinition = "nvarchar(255)")
  private String insertedBy;

  @Column(name = "InsertedDate")
  private Date insertedDate;

  @Column(name = "InvoiceAmount", columnDefinition = "money")
  private BigDecimal invoiceAmount;

  @Column(name = "InvoiceComplete")
  private boolean invoiceComplete;

  @Column(name = "InvoiceCompleteEmailDate")
  private Date invoiceCompleteEmailDate;

  @Column(name = "InvoiceCompletePackageDate")
  private Date invoiceCompletePackageDate;

  @Column(name = "InvoiceCustomerContract", columnDefinition = "nvarchar(255)")
  private String invoiceCustomerContract;

  @Column(name = "InvoiceNumber", columnDefinition = "nvarchar(255)")
  private String invoiceNumber;

  @Column(name = "InvoiceReceiptDate")
  private Date invoiceReceiptDate;

  @Column(name = "InvoiceShopCode", columnDefinition = "nvarchar(255)")
  private String invoiceShopCode;

  @Column(name = "InvoiceType", columnDefinition = "nvarchar(255)")
  private String invoiceType;

  @Column(name = "ItemsEventID")
  private Long itemsEventID;

  @Column(name = "LateInvoiceReason", columnDefinition = "nvarchar(255)")
  private String lateInvoiceReason;

  @Column(name = "ManualEntry")
  private boolean manualEntry;

  @Column(name = "Notes", columnDefinition = "nvarchar(255)")
  private String notes;

  @Column(name = "OperatorCode", columnDefinition = "nvarchar(255)")
  private String operatorCode;

  @Column(name = "OperatorName", columnDefinition = "nvarchar(255)")
  private String operatorName;

  @Column(name = "PaidShort")
  private boolean paidShort;

  @Column(name = "Payment2EmailDate")
  private Date payment2EmailDate;

  @Column(name = "Payment2RequestforSignature")
  private Date payment2RequestforSignature;

  @Column(name = "PaymentAmount", columnDefinition = "money")
  private BigDecimal paymentAmount;

  @Column(name = "PaymentDueDate")
  private Date paymentDueDate;

  @Column(name = "PaymentEmailDate")
  private Date paymentEmailDate;

  @Column(name = "PaymentNotes", columnDefinition = "nvarchar(255)")
  private String paymentNotes;

  @Column(name = "PaymentRequestforSignature")
  private Date paymentRequestforSignature;

  @Column(name = "PaymentStatus", columnDefinition = "nvarchar(255)")
  private String paymentStatus;
  @Column(name = "PONumber", columnDefinition = "nvarchar(255)")
  private String PONumber;

  @Column(name = "RemovalReason", columnDefinition = "nvarchar(255)")
  private String removalReason;

  @Column(name = "ShopCode", columnDefinition = "nvarchar(255)")
  private String shopCode;

  @Column(name = "SupplementalAffectsEXW")
  private boolean supplementalAffectsEXW;

  private boolean TBAffectsEXW;

  @Column(name = "TBAgreedCredit", columnDefinition = "money")
  private BigDecimal TBAgreedCredit;

  private Date TBAgreedCreditReceived;

  private Date TBDate;

  private Date TBDueDate;
  @Column(name = "TBNotes", columnDefinition = "nvarchar(255)")
  private String TBNotes;

  private boolean TBReSent;

  private Date TBResolutionDate;

  private Date TBReturnedDate;

  @Column(name = "TBTotal", columnDefinition = "money")
  private BigDecimal TBTotal;

  @Column(name = "UpdatedBy", columnDefinition = "nvarchar(255)")
  private String updatedBy;

  @Column(name = "UpdatedByOtherInitials", columnDefinition = "nvarchar(255)")
  private String updatedByOtherInitials;

  @Column(name = "UpdatedDate")
  private Date updatedDate;

  @Column(name = "W2CExclude")
  private boolean w2CExclude;

  @Column(name = "WaitingSupplemental")
  private boolean waitingSupplemental;

  @Column(name = "WorkOrderNumber", columnDefinition = "nvarchar(255)")
  private String workOrderNumber;

}