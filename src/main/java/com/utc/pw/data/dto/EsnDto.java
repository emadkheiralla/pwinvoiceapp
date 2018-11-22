package com.utc.pw.data.dto;

/**
 * ESN Data Transfer Object.
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@lombok.Getter
@lombok.Setter
@lombok.EqualsAndHashCode(of = {"esn" })
public class EsnDto {
  String esn;
}
