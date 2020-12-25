package com.michaelnsc.softproject.domain.enums;

public enum Role {

    ADMIN(001, "ROLE_ADMIN"),
    MANAGER(002, "ROLE_MANAGER"),
    FINISHER(003, "ROLE_FINISHER");

    private int cod;
    private String description;

    private Role(int cod, String description) {
        this.cod = cod;
        this.description = description;
    }

    public int getCod() {
        return cod;
    }

    public String getDescription() {
        return description;
    }

    public static Role toEnum(Integer cod) {

        if(cod == null) {
            return null;
        }

        for (Role x: Role.values()) {
            if (cod.equals(x.getCod())) {
                return x;
            }
        }

        throw new IllegalArgumentException("Id inválido: " + cod);
    };
}
