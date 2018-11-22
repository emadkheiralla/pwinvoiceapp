--CREATE SCHEMA ITEMS
--CREATE SCHEMA appl



/****** Object:  Table [appl].[InvoiceCurrentStatus]    Script Date: 10/17/2018 3:49:34 PM ******/
SET ANSI_NULLS ON


SET QUOTED_IDENTIFIER ON


CREATE TABLE [appl].[InvoiceCurrentStatus](
	[CurrentStatus] [nvarchar](50) NULL,
	[created_time] [datetime] NOT NULL,
	[created_by] [sysname] NOT NULL,
	[modified_time] [datetime] NOT NULL,
	[modified_by] [sysname] NOT NULL
) ON [PRIMARY]


ALTER TABLE [appl].[InvoiceCurrentStatus] ADD  DEFAULT (getdate()) FOR [created_time]


ALTER TABLE [appl].[InvoiceCurrentStatus] ADD  DEFAULT (suser_sname()) FOR [created_by]


ALTER TABLE [appl].[InvoiceCurrentStatus] ADD  DEFAULT (getdate()) FOR [modified_time]


ALTER TABLE [appl].[InvoiceCurrentStatus] ADD  DEFAULT (suser_sname()) FOR [modified_by]





/****** Object:  Table [appl].[InvoiceDisputeStatus]    Script Date: 10/17/2018 3:49:55 PM ******/
SET ANSI_NULLS ON


SET QUOTED_IDENTIFIER ON


CREATE TABLE [appl].[InvoiceDisputeStatus](
	[DisputeStatus] [nvarchar](50) NULL,
	[created_time] [datetime] NOT NULL,
	[created_by] [sysname] NOT NULL,
	[modified_time] [datetime] NOT NULL,
	[modified_by] [sysname] NOT NULL
) ON [PRIMARY]


ALTER TABLE [appl].[InvoiceDisputeStatus] ADD  DEFAULT (getdate()) FOR [created_time]


ALTER TABLE [appl].[InvoiceDisputeStatus] ADD  DEFAULT (suser_sname()) FOR [created_by]


ALTER TABLE [appl].[InvoiceDisputeStatus] ADD  DEFAULT (getdate()) FOR [modified_time]


ALTER TABLE [appl].[InvoiceDisputeStatus] ADD  DEFAULT (suser_sname()) FOR [modified_by]





/****** Object:  Table [appl].[InvoicePaymentStatus]    Script Date: 10/17/2018 3:50:34 PM ******/
SET ANSI_NULLS ON


SET QUOTED_IDENTIFIER ON


CREATE TABLE [appl].[InvoicePaymentStatus](
	[PaymentStatus] [nvarchar](50) NULL,
	[created_time] [datetime] NOT NULL,
	[created_by] [sysname] NOT NULL,
	[modified_time] [datetime] NOT NULL,
	[modified_by] [sysname] NOT NULL
) ON [PRIMARY]


ALTER TABLE [appl].[InvoicePaymentStatus] ADD  DEFAULT (getdate()) FOR [created_time]


ALTER TABLE [appl].[InvoicePaymentStatus] ADD  DEFAULT (suser_sname()) FOR [created_by]


ALTER TABLE [appl].[InvoicePaymentStatus] ADD  DEFAULT (getdate()) FOR [modified_time]


ALTER TABLE [appl].[InvoicePaymentStatus] ADD  DEFAULT (suser_sname()) FOR [modified_by]






/****** Object:  Table [appl].[DataLoadDates]    Script Date: 10/17/2018 3:50:52 PM ******/
SET ANSI_NULLS ON


SET QUOTED_IDENTIFIER ON


CREATE TABLE [appl].[DataLoadDates](
	[EagleDataLoaded] [datetime] NULL,
	[DataFileBackUp] [datetime] NULL,
	[ExportW2CInvoiceStatus] [datetime] NULL,
	[HolidayDatesWarning] [datetime] NULL,
	[HolidayDatesLoaded] [datetime] NULL,
	[EagleDataLoadedGTFLegacy] [datetime] NULL,
	[WingToCashV2500Loaded] [datetime] NULL,
	[ExportQCPC] [datetime] NULL,
	[created_time] [datetime] NOT NULL,
	[created_by] [sysname] NOT NULL,
	[modified_time] [datetime] NOT NULL,
	[modified_by] [sysname] NOT NULL
) ON [PRIMARY]


ALTER TABLE [appl].[DataLoadDates] ADD  DEFAULT (getdate()) FOR [created_time]


ALTER TABLE [appl].[DataLoadDates] ADD  DEFAULT (suser_sname()) FOR [created_by]


ALTER TABLE [appl].[DataLoadDates] ADD  DEFAULT (getdate()) FOR [modified_time]


ALTER TABLE [appl].[DataLoadDates] ADD  DEFAULT (suser_sname()) FOR [modified_by]





/****** Object:  Table [appl].[ShopContractType]    Script Date: 10/17/2018 3:51:08 PM ******/
SET ANSI_NULLS ON


SET QUOTED_IDENTIFIER ON


CREATE TABLE [appl].[ShopContractType](
	[ShopContract] [nvarchar](100) NULL,
	[created_time] [datetime] NOT NULL,
	[created_by] [sysname] NOT NULL,
	[modified_time] [datetime] NOT NULL,
	[modified_by] [sysname] NOT NULL
) ON [PRIMARY]


ALTER TABLE [appl].[ShopContractType] ADD  DEFAULT (getdate()) FOR [created_time]


ALTER TABLE [appl].[ShopContractType] ADD  DEFAULT (suser_sname()) FOR [created_by]


ALTER TABLE [appl].[ShopContractType] ADD  DEFAULT (getdate()) FOR [modified_time]


ALTER TABLE [appl].[ShopContractType] ADD  DEFAULT (suser_sname()) FOR [modified_by]





/****** Object:  Table [appl].[OperatorContractType]    Script Date: 10/17/2018 3:51:45 PM ******/
SET ANSI_NULLS ON


SET QUOTED_IDENTIFIER ON


CREATE TABLE [appl].[OperatorContractType](
	[OperatorContract] [nvarchar](100) NULL,
	[created_time] [datetime] NOT NULL,
	[created_by] [sysname] NOT NULL,
	[modified_time] [datetime] NOT NULL,
	[modified_by] [sysname] NOT NULL
) ON [PRIMARY]


ALTER TABLE [appl].[OperatorContractType] ADD  DEFAULT (getdate()) FOR [created_time]


ALTER TABLE [appl].[OperatorContractType] ADD  DEFAULT (suser_sname()) FOR [created_by]


ALTER TABLE [appl].[OperatorContractType] ADD  DEFAULT (getdate()) FOR [modified_time]


ALTER TABLE [appl].[OperatorContractType] ADD  DEFAULT (suser_sname()) FOR [modified_by]





/****** Object:  Table [appl].[InvoiceStatus]    Script Date: 10/17/2018 3:52:05 PM ******/
SET ANSI_NULLS ON


SET QUOTED_IDENTIFIER ON


CREATE TABLE [appl].[InvoiceStatus](
	[WingToCashSeq] [int] NULL,
	[EventID] [int] NULL,
	[EngineType] [nvarchar](20) NULL,
	[ESN] [nvarchar](10) NULL,
	[Customer Contract] [nvarchar](20) NULL,
	[ShopVisitCostType] [nvarchar](20) NULL,
	[InvoiceShopCode] [nvarchar](10) NULL,
	[ShopCode] [nvarchar](10) NULL,
	[EngineShipDate] [datetime] NULL,
	[InductionDate] [datetime] NULL,
	[RemovalDate] [datetime] NULL,
	[OperatorCode] [nvarchar](3) NULL,
	[OperatorName] [nvarchar](75) NULL,
	[ItemsEventID] [int] NULL,
	[Gate1Actual] [datetime] NULL,
	[EstimatedDueDate] [datetime] NULL,
	[ShopEstimateAmount] [money] NULL,
	[DateEstimateReceived] [datetime] NULL,
	[CustomerEstimateAmount] [money] NULL,
	[DateSenttoFM] [datetime] NULL,
	[EstimateComments] [nvarchar](max) NULL,
	[EstimateShopInvoiceDate] [datetime] NULL,
	[ActualShopInvoiceDate] [datetime] NULL,
	[EstimateCustomerInvoiceDate] [datetime] NULL,
	[EstimateCustomerInvoiceDateContract] [datetime] NULL,
	[ActualCustomerInvoiceDate] [datetime] NULL,
	[InsertedDate] [datetime] NULL,
	[InsertedBy] [nvarchar](20) NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](20) NULL,
	[ITEMSContract] [nvarchar](255) NULL,
	[VoidedEntry] [bit] NULL,
	[Status] [nvarchar](30) NULL,
	[created_time] [datetime] NOT NULL,
	[created_by] [sysname] NOT NULL,
	[modified_time] [datetime] NOT NULL,
	[modified_by] [sysname] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]


ALTER TABLE [appl].[InvoiceStatus] ADD  DEFAULT (getdate()) FOR [created_time]


ALTER TABLE [appl].[InvoiceStatus] ADD  DEFAULT (suser_sname()) FOR [created_by]


ALTER TABLE [appl].[InvoiceStatus] ADD  DEFAULT (getdate()) FOR [modified_time]


ALTER TABLE [appl].[InvoiceStatus] ADD  DEFAULT (suser_sname()) FOR [modified_by]





/****** Object:  Table [appl].[WingToCash]    Script Date: 10/17/2018 3:52:25 PM ******/
SET ANSI_NULLS ON


SET QUOTED_IDENTIFIER ON


CREATE TABLE [appl].[WingToCash](
	[WingToCashSeq] [int] NULL,
	[EventID] [int] NULL,
	[EngineType] [nvarchar](20) NULL,
	[ESN] [nvarchar](10) NULL,
	[Customer Contract] [nvarchar](20) NULL,
	[ShopVisitCostType] [nvarchar](20) NULL,
	[InvoiceShopCode] [nvarchar](10) NULL,
	[ShopCode] [nvarchar](10) NULL,
	[EngineShipDate] [datetime] NULL,
	[InductionDate] [datetime] NULL,
	[RemovalDate] [datetime] NULL,
	[OperatorCode] [nvarchar](3) NULL,
	[OperatorName] [nvarchar](75) NULL,
	[ItemsEventID] [int] NULL,
	[Gate1Actual] [datetime] NULL,
	[EstimatedDueDate] [datetime] NULL,
	[ShopEstimateAmount] [money] NULL,
	[DateEstimateReceived] [datetime] NULL,
	[CustomerEstimateAmount] [money] NULL,
	[DateSenttoFM] [datetime] NULL,
	[EstimateComments] [nvarchar](max) NULL,
	[EstimateShopInvoiceDate] [datetime] NULL,
	[ActualShopInvoiceDate] [datetime] NULL,
	[EstimateCustomerInvoiceDate] [datetime] NULL,
	[EstimateCustomerInvoiceDateContract] [datetime] NULL,
	[ActualCustomerInvoiceDate] [datetime] NULL,
	[InsertedDate] [datetime] NULL,
	[InsertedBy] [nvarchar](20) NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](20) NULL,
	[ITEMSContract] [nvarchar](255) NULL,
	[VoidedEntry] [bit] NULL,
	[Status] [nvarchar](30) NULL,
	[created_time] [datetime] NOT NULL,
	[created_by] [sysname] NOT NULL,
	[modified_time] [datetime] NOT NULL,
	[modified_by] [sysname] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]


ALTER TABLE [appl].[WingToCash] ADD  DEFAULT (getdate()) FOR [created_time]


ALTER TABLE [appl].[WingToCash] ADD  DEFAULT (suser_sname()) FOR [created_by]


ALTER TABLE [appl].[WingToCash] ADD  DEFAULT (getdate()) FOR [modified_time]


ALTER TABLE [appl].[WingToCash] ADD  DEFAULT (suser_sname()) FOR [modified_by]


