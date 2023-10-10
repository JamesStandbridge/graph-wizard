package com.graph_wizard.server.service.algorithms.exception;

public class NegativeWeightCycleException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public NegativeWeightCycleException() {
        super("Negative cycle detected.");
    }

    public NegativeWeightCycleException(String message) {
        super(message);
    }

    public NegativeWeightCycleException(String message, Throwable cause) {
        super(message, cause);
    }

    public NegativeWeightCycleException(Throwable cause) {
        super(cause);
    }
}
