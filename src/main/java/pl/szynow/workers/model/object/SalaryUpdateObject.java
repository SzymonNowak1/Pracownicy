package pl.szynow.workers.model.object;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class SalaryUpdateObject extends SalaryObject {

    @NotNull
    private Long id;
    @NotNull
    private String date;
    private String bonus;

    @NotNull
    private Long salaryTargetId;

}
