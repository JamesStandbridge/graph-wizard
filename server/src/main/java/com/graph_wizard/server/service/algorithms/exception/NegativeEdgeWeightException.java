package com.graph_wizard.server.service.algorithms.exception;

public class NegativeEdgeWeightException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public NegativeEdgeWeightException() {
        super("Negative edge weights are not allowed.");
    }

    public NegativeEdgeWeightException(String message) {
        super(message);
    }

    public NegativeEdgeWeightException(String message, Throwable cause) {
        super(message, cause);
    }

    public NegativeEdgeWeightException(Throwable cause) {
        super(cause);
    }
}
