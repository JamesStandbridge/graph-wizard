package com.graph_wizard.server.model;


import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.graph_wizard.server.config.serialization.PathSerializer;


@JsonSerialize(using = PathSerializer.class)
public class Path {
    private List<Node> nodes;
    private int totalWeight;

    public Path() {
        this.nodes = new ArrayList<>();
        this.totalWeight = 0;
    }

    public void addNode(Node node) {
        if (!nodes.isEmpty()) {
            Node lastNode = nodes.get(nodes.size() - 1);
            if (lastNode.getNeighbors().containsKey(node)) {
                totalWeight += lastNode.getNeighbors().get(node);
            } else {
                throw new IllegalArgumentException("The provided node is not a direct neighbor of the last node in the path.");
            }
        }
        nodes.add(node);
    }

    public List<Node> getNodes() {
        return nodes;
    }

    public int getTotalWeight() {
        return totalWeight;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < nodes.size(); i++) {
            sb.append(nodes.get(i).getName());
            if (i < nodes.size() - 1) {
                sb.append(" -> ");
            }
        }
        sb.append(" (Total weight: ").append(totalWeight).append(")");
        return sb.toString();
    }
}

