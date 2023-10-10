package com.graph_wizard.server.model;

public class Edge {
    private String source;
    private String target;
    private Integer weight;
    private Boolean oriented;

    public Edge(String source, String target, Integer weight, Boolean oriented) {
        this.source = source;
        this.target = target;
        this.weight = weight;
        this.oriented = oriented;
    }

    public String getSource() {
        return this.source;
    }

    public String getTarget() {
        return this.target;
    }

    public Integer getWeight() {
        return this.weight;
    }

    public Boolean isOriented() {
        return this.oriented;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public void setOriented(Boolean oriented) {
        this.oriented = oriented;
    }

    public String toString() {
        return "Edge(source=" + this.getSource() + ", target=" + this.getTarget() + ", weight=" + this.getWeight() + ", oriented=" + this.isOriented() + ")";
    }
}
